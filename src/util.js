export function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

export function capture(video, options){
    options = options || {};
    options.width = options.width || 640;
    options.height = options.height || 425;

    const canvas = document.createElement("canvas");


    canvas.getContext("2d").drawImage(video, 0, 0);
    // will fall back to image/png if not webp not available
    return canvas.toDataURL('image/webp');
}