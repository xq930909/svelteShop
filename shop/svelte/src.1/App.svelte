<script>
	import Count from './Count.svelte'
	export let name;
	let number = 120;
	const addnum  =  () => {
		number ++
	}
	let arr = [1,2,666666,8]
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<button on:click={addnum}>点击</button>
<br>
<Count {number} {arr}/>
{#if number>122}
	大大
{:else}
	小小
{/if}