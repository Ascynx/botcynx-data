import { MessageContextCommand } from "../../../structures/Commands";
import { GuildTextBasedChannel, MessageEmbed } from "discord.js";

export default new MessageContextCommand({
    name: 'reply',
    type: "MESSAGE",

    run: async({ interaction }) => {
        interaction.followUp({content: `${(interaction.channel as GuildTextBasedChannel).messages.cache.get(interaction.targetId).content}`})

    }
})