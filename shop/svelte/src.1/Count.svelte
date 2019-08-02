<script>
    export let number = 10
    export let arr
    let str = '等待111'
    let pro = new Promise((reslove,reject) =>{
        setTimeout(() => {
            reslove(str='111111')
        }, 3000);
    })
</script>

<style>
    span{
        color:red;
    }
</style>

{#await pro}
    {str}
{:then str1}
    {str1}
{/await}
<br>
<span>
    number:{number}
</span>
<br>
{#each arr as item}
    <p>{item}</p>
{/each}