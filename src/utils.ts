export const downloadImage = (video:HTMLVideoElement, canvas:HTMLCanvasElement) => {
    const a = document.createElement('a');
    const ctx = canvas.getContext('2d');
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    ctx?.drawImage(video, 0, 0);
    a.href = canvas.toDataURL();
    a.download = 'image';
    a.click();
}