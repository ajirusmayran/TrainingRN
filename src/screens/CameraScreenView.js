import React from 'react';
import { View, Text } from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';

export default function CameraScreenView() {
    return (
        <CameraScreen
            actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
            onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
            flashImages={{
                // optional, images for flash state
                on: require('../../assets/images/flash-on.png'),
                off: require('../../assets/images/flash-off.png'),
                auto: require('../../assets/images/flash-auto.png'),
            }}
            cameraFlipImage={require('../../assets/images/switch-camera.png')} // optional, image for flipping camera button
            captureButtonImage={require('../../assets/images/sewing-button.png')} // optional, image capture button
            torchOnImage={require('../../assets/images/flash-light.png')} // optional, image for toggling on flash light
            torchOffImage={require('../../assets/images/switch-camera.png')} // optional, image for toggling off flash light
            hideControls={false} // (default false) optional, hides camera controls
            showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session

            // Barcode props
            scanBarcode={true}
            onReadCode={(event) => Alert.alert('QR code found')} // optional
            showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
            laserColor='red' // (default red) optional, color of laser in scanner frame
            frameColor='white' // (default white) optional, color of border of scanner frame
        />
    )
}
