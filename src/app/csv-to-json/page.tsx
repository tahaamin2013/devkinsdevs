 "use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertCircle,
  Download,
  FileJson,
  FileSpreadsheet,
  Copy,
  Trash,
  RefreshCw,
  HelpCircle,
  FileUp,
} from "lucide-react"

export default function JsonToCsvConverter() {
  const [jsonInput, setJsonInput] = useState("")
  const [csvOutput, setCsvOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  // Pre-load the flight data
  useEffect(() => {
    const flightData = `{"pagination":{"limit":100,"offset":0,"count":82,"total":82},"data":[{"flight_date":"2025-03-15","flight_status":"landed","departure":{"airport":"Yundum International","timezone":"Africa/Banjul","iata":"BJL","icao":"GBYD","terminal":null,"gate":null,"delay":null,"scheduled":"2025-03-15T03:10:00+00:00","estimated":"2025-03-15T03:10:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"arrival":{"airport":"Felix Houphouet Boigny","timezone":"Africa/Abidjan","iata":"ABJ","icao":"DIAP","terminal":null,"gate":null,"baggage":null,"scheduled":"2025-03-15T06:10:00+00:00","delay":null,"estimated":null,"actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Aerolineas Sosa","iata":"P4","icao":"NSO"},"flight":{"number":"7771","iata":"P47771","icao":"NSO7771","codeshared":null},"aircraft":{"registration":"5N-BUJ","iata":"B735","icao":"B735","icao24":"0641D9"},"live":null}]}`
    setJsonInput(flightData)
  }, [])

  const convertJsonToCsv = () => {
    try {
      setError(null)
      setIsLoading(true)

      // Parse JSON input
      const jsonData = JSON.parse(jsonInput)

      // Check if we have a data array (common API response format)
      const dataToProcess = jsonData.data ? jsonData.data : jsonData

      // Handle empty array or object
      if (Array.isArray(dataToProcess) && dataToProcess.length === 0) {
        setCsvOutput("")
        setError("JSON array is empty")
        setIsLoading(false)
        return
      }

      if (!Array.isArray(dataToProcess) && Object.keys(dataToProcess).length === 0) {
        setCsvOutput("")
        setError("JSON object is empty")
        setIsLoading(false)
        return
      }

      // Convert JSON to CSV
      let csv = ""

      // Handle array of objects (most common case)
      if (Array.isArray(dataToProcess)) {
        // Get headers from the first object, flattening nested objects
        const headers = getHeadersFromObject(dataToProcess[0])
        csv += headers.join(",") + "\n"

        // Add data rows
        dataToProcess.forEach((item) => {
          const row = headers.map((header) => {
            // Handle nested properties using dot notation
            const value = getNestedValue(item, header)

            // Format the value for CSV
            if (value === null || value === undefined) return ""
            if (typeof value === "object") return JSON.stringify(value).replace(/"/g, '""')
            return typeof value === "string" ? `"${value.replace(/"/g, '""')}"` : value
          })
          csv += row.join(",") + "\n"
        })
      } else {
        // Handle single object
        const headers = Object.keys(dataToProcess)
        csv += headers.join(",") + "\n"

        const row = headers.map((header) => {
          const value = dataToProcess[header]
          if (value === null || value === undefined) return ""
          if (typeof value === "object") return JSON.stringify(value).replace(/"/g, '""')
          return typeof value === "string" ? `"${value.replace(/"/g, '""')}"` : value
        })
        csv += row.join(",") + "\n"
      }

      setCsvOutput(csv)
      setIsLoading(false)
    } catch (err) {
      setCsvOutput("")
      setError("Invalid JSON format. Please check your input.")
      console.error(err)
      setIsLoading(false)
    }
  }

  // Function to get nested value using dot notation (e.g., "user.address.city")
  const getNestedValue = (obj: Record<string, unknown>, path: string): unknown => {
    const keys = path.split(".")
    return keys.reduce(
      (o, key) => (o && typeof o === "object" && key in o ? (o as Record<string, unknown>)[key] : null),
      obj as unknown,
    )
  }

  // Function to get all headers from an object, including nested objects with dot notation
  const getHeadersFromObject = (obj: Record<string, unknown>, prefix = ""): string[] => {
    let headers: string[] = []

    Object.keys(obj).forEach((key) => {
      const value = obj[key]
      const newKey = prefix ? `${prefix}.${key}` : key

      if (value !== null && typeof value === "object" && !Array.isArray(value)) {
        // Recursively get headers from nested objects
        headers = [...headers, ...getHeadersFromObject(value as Record<string, unknown>, newKey)]
      } else {
        headers.push(newKey)
      }
    })

    return headers
  }

  const downloadCsv = () => {
    if (!csvOutput) return

    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "converted_data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Could add a toast notification here
        console.log("Copied to clipboard")
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  const clearData = (type: "input" | "output" | "both") => {
    if (type === "input" || type === "both") {
      setJsonInput("")
    }
    if (type === "output" || type === "both") {
      setCsvOutput("")
    }
    if (type === "both") {
      setError(null)
    }
  }

  const loadSampleData = () => {
    const sampleData = [
      { id: 1, name: "John Doe", email: "john@example.com", age: 30, active: true },
      { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25, active: false },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 40, active: true },
    ]
    setJsonInput(JSON.stringify(sampleData, null, 2))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      setJsonInput(content)
    }
    reader.readAsText(file)
  }

  const toggleHelp = () => {
    setShowHelp(!showHelp)
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-6">JSON to CSV Converter</h1>

      {/* Toolbar */}
      <div className="bg-muted p-4 rounded-lg mb-6 flex flex-wrap gap-2 justify-center">
        <Button onClick={() => convertJsonToCsv()} disabled={!jsonInput || isLoading}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Convert
        </Button>
        <Button onClick={downloadCsv} disabled={!csvOutput} variant="secondary">
          <Download className="mr-2 h-4 w-4" />
          Download CSV
        </Button>
        <Button onClick={loadSampleData} variant="outline">
          <FileJson className="mr-2 h-4 w-4" />
          Load Sample
        </Button>
        <Button onClick={() => clearData("both")} variant="outline">
          <Trash className="mr-2 h-4 w-4" />
          Clear All
        </Button>
        <div className="relative">
          <input
            type="file"
            accept=".json"
            onChange={handleFileUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            id="file-upload"
          />
          <Button variant="outline" asChild>
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileUp className="mr-2 h-4 w-4" />
              Upload JSON
            </label>
          </Button>
        </div>
        <Button onClick={toggleHelp} variant="ghost">
          <HelpCircle className="mr-2 h-4 w-4" />
          {showHelp ? "Hide Help" : "Show Help"}
        </Button>
      </div>

      {showHelp && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How to Use the JSON to CSV Converter</CardTitle>
            <CardDescription>Convert your JSON data to CSV format with these simple steps</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Basic Usage:</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Paste your JSON data in the input field (array of objects works best)</li>
                <li>Click the Convert button in the toolbar</li>
                <li>View the converted CSV in the output field</li>
                <li>Download the CSV file using the download button</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Features:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Nested Objects:</strong> The converter handles nested objects by flattening them with dot
                  notation
                </li>
                <li>
                  <strong>File Upload:</strong> Upload JSON files directly
                </li>
                <li>
                  <strong>Sample Data:</strong> Load sample data to test the converter
                </li>
                <li>
                  <strong>Copy/Clear:</strong> Easily copy results or clear fields
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileJson className="h-5 w-5" />
              JSON Input
            </CardTitle>
            <CardDescription>Paste your JSON data here</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder='[{"name":"John","age":30},{"name":"Jane","age":25}]'
              className="min-h-[300px] font-mono"
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => copyToClipboard(jsonInput)} disabled={!jsonInput} variant="outline" size="sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button onClick={() => clearData("input")} disabled={!jsonInput} variant="outline" size="sm">
              <Trash className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              CSV Output
            </CardTitle>
            <CardDescription>Your converted CSV data</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Textarea
              readOnly
              className="min-h-[300px] font-mono"
              value={csvOutput}
              placeholder="CSV output will appear here"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => copyToClipboard(csvOutput)} disabled={!csvOutput} variant="outline" size="sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button onClick={() => clearData("output")} disabled={!csvOutput} variant="outline" size="sm">
              <Trash className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
