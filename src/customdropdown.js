import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';

import ckeditor5Icon from '../theme/icons/ckeditor.svg';

export default class CustomDropdown extends Plugin {
	static get pluginName() {
		return 'CustomDropdown';
	}

	init() {
		const editor = this.editor;
		const t = editor.t;
		const model = editor.model;

		// Add the "customDropdownButton" to feature components.
		editor.ui.componentFactory.add( 'customDropdownButton', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Custom dropdown' ),
				icon: ckeditor5Icon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
				model.change( writer => {
					const textNode = writer.createText( 'Hello CKEditor 5!' );

					model.insertContent( textNode );
				} );

				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
