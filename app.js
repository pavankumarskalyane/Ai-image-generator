// const token = "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";
const token = "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";
const inputtxt=document.getElementById("input");
const image=document.getElementById("image");
const button=document.getElementById("button");

async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
		{
			headers: { Authorization: `Bearer ${token}`},
				// "Content-Type": "application/json",
			
			method: "POST",
			body: JSON.stringify({"inputs": inputtxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}


button.addEventListener('click', async function(){
    query().then((response)=>{
        const objectURL=URL.createObjectURL(response)
        image.src=objectURL
    });
})

