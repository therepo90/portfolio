import * as React from "react";
import { Component } from "react";

export interface PreloadImagesProps {
    images: string[];
    loadingIndicator: React.ReactNode;
    children: React.ReactNode;
    mount: boolean;
    loaded: () => any;
}

// caches only images that are passed for the first time
export default class PreloadImages extends Component<PreloadImagesProps> {
    imagesLoaded = 0;
    renderedImagesFirstTime = false;

    state = {
        showChildren: false,
    }

    onLoadImage = (src: string) => () => {
        const { images } = this.props;

        this.imagesLoaded++;
        if (this.imagesLoaded >= images.length) {
            // console.log('All loaded', images);
            setTimeout(() => this.onLoadedImages(), 500);
        }
    }

    componentDidMount() {
        this.renderedImagesFirstTime = true;
        setTimeout(() => {
            if (!this.state.showChildren) {
                this.onLoadedImages();
            }
        }, 3000); // resolve anyway
    }

    onLoadedImages = () => {
        this.setState({
            showChildren: true,
        });
        this.props.loaded && this.props.loaded();
    }

    render() {
        const { images, loadingIndicator, children, mount } = this.props;
        const { showChildren } = this.state;
        return <React.Fragment>
            {!showChildren && loadingIndicator}
            {!this.renderedImagesFirstTime && !showChildren && images.map(
                (src, i) => <img key={i} src={src} onLoad={this.onLoadImage(src)} onError={this.onLoadImage(src)} style={{ display: 'none' }} />
            )}
            {!mount && showChildren && children}
            {mount && <div style={showChildren ? { display: 'initial' } : { display: 'none' }}>
                {children}
            </div>}

        </React.Fragment>
    }
};