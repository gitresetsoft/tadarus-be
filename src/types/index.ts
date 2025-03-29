import { Message } from 'node-telegram-bot-api';

export interface BotCommand {
  command: string;
  description: string;
  handler: (msg: Message, match: RegExpExecArray | null) => Promise<void>;
}

export interface CommandResponse {
  success: boolean;
  message: string;
  data?: any;
} 