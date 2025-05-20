import postgres from 'postgres'

if (!import.meta.env.VITE_DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const sql = postgres(import.meta.env.VITE_DATABASE_URL, {
  ssl: 'require',
  max: 10, // Maximum number of connections
  idle_timeout: 20, // Idle connection timeout in seconds
})

export default sql 