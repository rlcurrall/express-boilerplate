import { container } from 'tsyringe'

export function resolve<T>(token: any): T {
  return container.resolve(token)
}
