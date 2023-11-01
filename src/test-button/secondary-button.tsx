import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'secondary-button',
    styleUrl: 'secondary-button.css',
    shadow: true,
})
export class SecondaryButton {
    @Prop() text: string;

    render() {
        return <button class="black">{this.text}</button>;
    }
}   