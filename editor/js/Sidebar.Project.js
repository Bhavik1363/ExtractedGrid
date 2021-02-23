import { UIPanel, UIRow, UIInput, UICheckbox, UIText, UISpan } from './libs/ui.js';

import { SidebarProjectRenderer } from './Sidebar.Project.Renderer.js';

function SidebarProject( editor ) {

	var container = new UISpan();

	container.add( new SidebarProjectRenderer( editor ) );
	return container;
}

export { SidebarProject };
