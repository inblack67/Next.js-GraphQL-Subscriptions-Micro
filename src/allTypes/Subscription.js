import { subscriptionType } from '@nexus/schema';

let count = 0;
const CHANNEL_NAME = 'COUNT';

export const Subscription = subscriptionType({
    definition(t) {
      t.int('count', {
      nullable: true,
        subscribe: (parent, args, { pubsub }) => {
            setInterval(() => {
                count += 1;
                pubsub.publish(CHANNEL_NAME, {
                    count
                })
            }, 1000)
            return pubsub.asyncIterator(CHANNEL_NAME)
        }
    })
    }
})