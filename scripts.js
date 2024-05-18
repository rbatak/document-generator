function displayForm() {
    const documentDropdown = document.getElementById('documentDropdown');
    const selectedDocument = documentDropdown.value;
    const formContent = document.getElementById('formContent');

    let formHTML = '';

    switch (selectedDocument) {
        case 'resume':
            formHTML = `
                <form id="resumeForm">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email">
                    
                    <label for="experience">Experience:</label>
                    <textarea id="experience" name="experience"></textarea>
                    
                    <button type="submit">Generate Resume</button>
                </form>`;
            break;
        case 'coverLetter':
            formHTML = `
                <form id="coverLetterForm">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email">
                    
                    <label for="recipient">Recipient:</label>
                    <input type="text" id="recipient" name="recipient">
                    
                    <label for="content">Content:</label>
                    <textarea id="content" name="content"></textarea>
                    
                    <button type="submit">Generate Cover Letter</button>
                </form>`;
            break;
        case 'invoice':
            formHTML = `
                <form id="invoiceForm">
                    <label for="companyName">Company Name:</label>
                    <input type="text" id="companyName" name="companyName">
                    
                    <label for="clientName">Client Name:</label>
                    <input type="text" id="clientName" name="clientName">
                    
                    <label for="amount">Amount:</label>
                    <input type="number" id="amount" name="amount">
                    
                    <button type="submit">Generate Invoice</button>
                </form>`;
            break;
        default:
            formHTML = '<p>Please select a document type.</p>';
    }

    formContent.innerHTML = formHTML;
}
