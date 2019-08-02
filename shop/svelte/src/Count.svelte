<script>
    export let number = 0;
    export let add
</script>

<style>
    button{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        line-height: 10px;
        font-size: 25px;
        text-align: center;
    }
   
</style>
<button on:click={()=>{add(number.id,'redu')}}>-</button>
    {number.count}
<button on:click={()=>{add(number.id,'add')}}>+</button>