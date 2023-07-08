<script lang="ts">
    import type { PageData } from './$types';
    import pb from '@/routes/pocketbase'
    
    export let data: PageData;

    let gameId: string;

    function searchForGame() {
        const gameCollection = pb.collection('games');
        const game = gameCollection.getFirstListItem(`pin="${gameId}"`);
        console.log(game);
    }
</script>

<form on:submit|preventDefault={searchForGame}>
    <label for="game-id" class="label">Game ID</label>
    <input type="text" id="game-id" name="game-id" bind:value={gameId} class="input input-bordered" />
    <button type="submit" class="button">Join</button>
</form>
