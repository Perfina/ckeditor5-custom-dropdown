import { CustomDropdown as CustomDropdownDll, icons } from '../src';
import CustomDropdown from '../src/customdropdown';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 CustomDropdown DLL', () => {
	it( 'exports CustomDropdown', () => {
		expect( CustomDropdownDll ).to.equal( CustomDropdown );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
