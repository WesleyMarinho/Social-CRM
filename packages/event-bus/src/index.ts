import { connect, StringCodec, type NatsConnection } from 'nats';

export async function createNatsClient(url: string): Promise<NatsConnection> {
  return await connect({ servers: url });
}

const sc = StringCodec();

export function publishJSON(nc: NatsConnection, subject: string, data: unknown) {
  nc.publish(subject, sc.encode(JSON.stringify(data)));
}
