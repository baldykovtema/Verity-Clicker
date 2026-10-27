const dialog=document.getElementById('video-dialog'),video=document.getElementById('final-video');
document.getElementById('watch-video').addEventListener('click',()=>{dialog.showModal();video.play().catch(()=>{});});
document.getElementById('close-video').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>video.pause());
