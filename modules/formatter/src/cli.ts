#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs"
import { formatDocument } from "./index"

const args = process.argv.slice(2)
const files = args.filter((arg) => !arg.startsWith("--"))
const write = args.includes("--write")

async function run() {
  for (const file of files) {
    try {
      const content = readFileSync(file, "utf-8")
      const result = await formatDocument({
        text: content,
        uri: `file://${file}`,
      })

      if (write) {
        writeFileSync(file, result.formattedText)
        console.log(`Formatted ${file}`)
      } else {
        console.log(result.formattedText)
      }
    } catch (error) {
      console.error(`Error formatting ${file}:`, error)
      process.exit(1)
    }
  }
}

run()
