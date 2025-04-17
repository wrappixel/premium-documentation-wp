$(function () {

    const pages = [
        { name: 'Introduction', link: 'index.html' , target:"_self" },
        { name: 'Folder Structure', link: 'docs-structure.html' , target:"_self"},
        { name: 'Quick Start', link: 'docs-start.html' , target:"_self"},
        { name: 'Licenses', link: 'docs-licenses.html' , target:"_self"},
        { name: 'Customize Theme', link: 'docs-setting.html' , target:"_self"},
        { name: 'Change Logo', link: 'docs-logo.html' , target:"_self"},
        { name: 'Color', link: 'docs-color.html' , target:"_self"},
        { name: 'Typography', link: 'docs-typography.html' , target:"_self"},
        { name: 'Icons', link: 'docs-icon.html' , target:"_self"},
        { name: 'Apex Charts', link: 'docs-charts-apex.html' , target:"_self"},
        { name: 'Accordian', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-accordian.html'  , target:"_blank" },
        { name: 'Badge', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-badge.html' , target:"_blank"},
        { name: 'Buttons', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-buttons.html' , target:"_blank"},
        { name: 'Dropdowns', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-dropdowns.html' , target:"_blank"},
        { name: 'Modals', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-modals.html' , target:"_blank"},
        { name: 'Tab', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-tab.html' , target:"_blank"},
        { name: 'Tooltip & Popover', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-tooltip-popover.html' , target:"_blank"},
        { name: 'Alerts', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-notification.html' , target:"_blank"},
        { name: 'Progressbar', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-progressbar.html' , target:"_blank"},
        { name: 'Pagination', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-pagination.html' , target:"_blank"},
        { name: 'Typography', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-typography.html' , target:"_blank"},
        { name: 'Bootstrap UI', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-bootstrap-ui.html' , target:"_blank"},
        { name: 'Breadcrumb', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-breadcrumb.html' , target:"_blank"},
        { name: 'Offcanvas', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-offcanvas.html' , target:"_blank"},
        { name: 'Lists', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-lists.html' , target:"_blank"},
        { name: 'Grid', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-grid.html' , target:"_blank"},
        { name: 'Carousel', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-carousel.html' , target:"_blank"},
        { name: 'Scrollspy', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-scrollspy.html' , target:"_blank"},
        { name: 'Spinner', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-spinner.html' , target:"_blank"},
        { name: 'Link', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/ui-link.html' , target:"_blank"},
        { name: 'Basic Table', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/table-basic.html' , target:"_blank"},
        { name: 'Dark Basic Table', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/table-dark-basic.html' , target:"_blank"},
        { name: 'Sizing Table', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/table-sizing.html' , target:"_blank"},
        { name: 'Coloured Table', link: 'https://bootstrapdemos.adminmart.com/modernize/dist/main/table-layout-coloured.html' , target:"_blank"},
        { name: 'Datatable', link: 'docs-data-tables.html' , target:"_self"},
        { name: 'Helper Classes', link: 'docs-helper-classes.html' , target:"_self"},
        { name: 'Datepicker', link: 'docs-datepicker.html' , target:"_self"},
        { name: 'Form Pickers', link: 'docs-form-picker.html' , target:"_self"},
        { name: 'Credits', link: 'docs-credits.html' , target:"_self"},
        { name: 'Change Log', link: 'docs-change-log.html' , target:"_self" }
    ];

    const input = document.getElementById('searchInput');
    const resultList = document.getElementById('resultList');

    const showResults = (filteredPages) => {
        resultList.innerHTML = '';
        filteredPages.forEach(page => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = page.link;
            link.target = page.target;
            link.textContent = page.name;
            li.appendChild(link);
            resultList.appendChild(li);
        });
        resultList.style.display = filteredPages.length ? 'block' : 'none';
    };

    input.addEventListener('input', () => {
        const searchValue = input.value.toLowerCase();
        const filtered = pages.filter(page => page.name.toLowerCase().includes(searchValue));
        showResults(filtered);
    });

    input.addEventListener('focus', () => {
        // Show top 5 pages as default suggestions on focus
        showResults(pages.slice(0, 5));
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !resultList.contains(e.target)) {
            resultList.style.display = 'none';
        }
    });

});