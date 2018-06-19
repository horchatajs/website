import CMS from 'netlify-cms';

import StaticPagePreview from './preview-templates/StaticPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('static', StaticPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
