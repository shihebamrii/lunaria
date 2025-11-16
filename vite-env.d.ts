/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TECH_PASS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}