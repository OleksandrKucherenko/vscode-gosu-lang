export type Disposable = { dispose(): void }

export interface ExtensionContext {
  subscriptions: Disposable[]
}

const noopDisposable: Disposable = { dispose() {} }

export const commands = {
  registerCommand(_command: string, _callback: (...args: unknown[]) => unknown, _thisArg?: unknown): Disposable {
    return noopDisposable
  },
}

export const window = {
  showInformationMessage(_message: string): void {
    // noop stub for tests
  },
  showWarningMessage(_message: string): void {
    // noop stub for tests
  },
  showErrorMessage(_message: string): void {
    // noop stub for tests
  },
}

export const workspace = {
  createFileSystemWatcher(_globPattern: string): Disposable {
    return noopDisposable
  },
}
