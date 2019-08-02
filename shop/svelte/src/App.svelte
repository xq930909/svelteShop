<script>
	import Count from './Count.svelte'
	import {onMount} from 'svelte'
	let data = []
	let checkall = false;
	let totalcount = 0
	let totalprice = 0
	onMount(async function(){
		let res = await fetch('http://127.0.0.1:7001/user')
		data = await res.json()
	})

	const add = (id,type) =>{
		if(type === 'add'){
			data.forEach(item=>{
				if (item.id === id) {item.count ++}
			})
			data = data
		}else{
			data.forEach(item=>{
				if (item.id === id) {item.count --}
			})
			data = data
		}
		totalCount()
	}

	const change = (id) =>{
		data.forEach(item=>{
			if (item.id === id) {item.check = !item.check}
		})
		let falg = data.every(item =>{
			return item.check
		})
		console.log(falg)
		totalCount()
		data = data
		checkall = falg
	}

	const totalCount = () => {
		let number = 0;
		let price = 0;
		data.forEach(item=>{
			if (item.check) {
				 number += item.count
				 price += item.count * item.price
			}
		})
		totalcount = number
		totalprice = price
	}

	const allchange = () =>{
		let flag = data.every(item =>{
			return item.check
		})
		if(!flag){
			data.forEach(item=>{
				item.check = true;
			})
		}else{
			data.forEach(item=>{
				item.check = false;
			})
		}
		data = data
		totalCount()
	}

	const del = (id) =>{
		let ind = data.findIndex(item=>{
			return item.id === id
		})
		data.splice(ind,1)
		data = data
	}
	
</script>
	
<style>
	input{
		width: 30px;
		height: 30px;
	}
	img{
		display: inline-block;
		width: 100px;
		height: 100px;
		background: red;
	}
	dl{
		display: flex;
		border-bottom: 1px solid;
		justify-content: center;
		align-items: center;
		height: 120px;
	}
	span{
		color:red;
	}
	.box{
		margin-bottom: 50px;
	}
	.flex{
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		height: 50px;
		border-top: 1px solid;
		background: white;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.allp{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		line-height: 50px;
	}
</style>
<div class="box">
	{#each data as item}
		<dl>
			<dt><input type="checkbox" checked='{item.check}' 
			on:change={() => {
				change(item.id)
			}}></dt>
			<dd><img src="{item.imgurl}" alt=""></dd>
			<dd>
				<p>{item.title}</p>
				<p>price<span>￥：{item.price}</span></p>
				<p><Count {add} number={item}/></p>
			</dd>
			<dd><b on:click={()=>{del(item.id)}}>删除</b></dd>
		</dl>
	{/each}
</div>

<div class="flex">
	<p class="allp"> 全选 <input type="checkbox" on:change={allchange} bind:checked={checkall} ></p>
	总计：<p><span>{totalcount}</span>件</p>
	<p><span>{totalprice}</span>元</p>
</div>