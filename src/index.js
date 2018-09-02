const button = document.createElement('button');
button.innerText = 'Load image';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);