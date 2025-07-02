document.getElementById('downloadBtn').addEventListener('click', function() {

    const appUrl = 'SK NAHIM YT.apk';
    
   
    const link = document.createElement('a');
    link.href = appUrl;
    link.download = 'SK NAHIM YT.apk';
    

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    

    alert('ডাউনলোড শুরু হচ্ছে...');
});
