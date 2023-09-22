import fs from 'fs'
import { Role, Target } from './game'

export interface ConfigType {
    roles: Record<Role, number>
    target: Target,
    pass: Array<string>
}

export const loadConfig = (): ConfigType => JSON.parse(fs.readFileSync('./cfg.json').toString())