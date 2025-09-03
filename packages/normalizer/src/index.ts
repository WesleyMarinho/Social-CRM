export type ChannelType = 'TELEGRAM' | 'WHATSAPP' | 'INSTAGRAM';

export interface NormalizedPeer {
  platform: ChannelType;
  platformId: string;
  displayName?: string;
  phoneE164?: string;
  username?: string;
  avatarUrl?: string;
}

export type NormalizedContent =
  | { kind: 'text'; text: string }
  | { kind: 'image'; url: string; caption?: string }
  | { kind: 'document'; url: string; filename?: string }
  | { kind: 'audio'; url: string; durationSec?: number }
  | { kind: 'video'; url: string; durationSec?: number }
  | { kind: 'reaction'; emoji: string }
  | { kind: 'unknown'; raw: any };

export interface NormalizedMessage {
  id: string;
  conversationKey: string;
  from: NormalizedPeer;
  to?: NormalizedPeer;
  timestamp: string;
  direction: 'IN' | 'OUT';
  contents: NormalizedContent[];
  replyToId?: string;
  status?: 'SENT' | 'DELIVERED' | 'READ' | 'FAILED';
}

export interface SendMessageRequest {
  tenantId: string;
  channelId: string;
  peer: NormalizedPeer;
  message: NormalizedContent;
}
