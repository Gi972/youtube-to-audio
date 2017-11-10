import { exec as execModule } from 'child_process'

export function exec(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const execCommand = execModule(command, { cwd: process.cwd() })

    execCommand.stdout.on('data', chunk => {
      console.log((chunk).toString())
    })
    execCommand.stdout.on('end', () => resolve())
    execCommand.stdout.on('error', err => reject(err))
  })
}
