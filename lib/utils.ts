import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle base path for GitHub Pages
export function getBasePath(): string {
  return process.env.NODE_ENV === "production" ? process.env.BASE_PATH || "" : ""
}

// Utility function to create proper asset URLs
export function getAssetPath(path: string): string {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

// Utility function for internal navigation
export function getInternalPath(path: string): string {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
