 <script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    const themes = [
        {
            id: 'pokemon',
            name: 'Pokemon'
        }
    ]
</script>

<form method="post">
    <label for="theme" class="label"><span class="label-text text-lg">Theme</span></label>
    <select name="theme" id="theme" class="select select-bordered w-44">
        {#each themes as theme}
            <option value={theme.id}>{theme.name}</option>
        {/each}
    </select>

    <label for="lobby-name" class="label"><span class="label-text text-lg">Lobby Name</span></label>
    <input type="text" name="lobby-name" id="lobby-name" class="input input-bordered w-44" placeholder="Lobby name" />

    <label for="max-players" class="label"><span class="label-text text-lg">Max Players</span></label>
    <input type="number" name="max-players" id="max-players" class="input input-bordered w-44" placeholder="Max players" />

    <button type="submit" class="btn btn-primary">Create</button>
</form>