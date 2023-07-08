import type { PageServerLoad } from './$types';
import pb from '@/routes/pocketbase';


export const load = (async ({parent}) => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();

        const theme = formData.get('theme') as string;
        const lobbyName = formData.get('lobby-name') as string;
        const maxPlayers = formData.get('max-players') as string;

        const pin = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');

        const gamesCollection = pb.collection('games');

        

        const game = await gamesCollection.create({
            theme,
            lobby_name: lobbyName,
            max_players: maxPlayers,
            pin,
        });

        console.log(game);
    }
}