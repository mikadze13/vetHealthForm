function printForm() {
    const formContainer = document.querySelector('.form-container');
    const inputs = formContainer.querySelectorAll('input, textarea');
    const printContent = formContainer.cloneNode(true);

    inputs.forEach(input => { 
        const inputClone = printContent.querySelector(`#${input.id}`);
        
        if (inputClone) {
            if (input.type === 'radio') { 
                if (input.checked) {
                    inputClone.setAttribute('checked', 'checked');
                } else {
                    inputClone.removeAttribute('checked');
                }
            } else if (input.type === 'tel') { 
                inputClone.setAttribute('value', input.value);
            } else if (input.tagName.toLowerCase() === 'textarea') { 
                inputClone.textContent = input.value;
            } else { 
                inputClone.setAttribute('value', input.value);
            }
        }
    });

    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head> 
            <style>
               body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f9fc;
        }

        .form-container {
            width: 90%;
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 9px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .form-header {
            text-align: center;
            color: #007B8F;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .form-header h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .form-header img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 15px;
        }

        .form-group {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 15px;
        }

        .form-group label {
            width: 100%;
            margin-bottom: 5px;
            color: rgba(0, 0, 0, 0.559);
            font-weight: bold;
        }

        .form-group .input-row {
            display: flex;
            width: 100%;
            gap: 15px;
        }

        .form-group .input-row input {
            flex: 1;
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.559);
            border-radius: 5px;
            font-size: 14px;
        }

        .form-footer {
            text-align: center;
            margin-top: 20px;
        }

        .form-footer button {
            padding: 10px 20px;
            background-color: #007B8F;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .form-footer button:hover {
            background-color: #005f6e;
        }

        .hint-text {
            font-size: 12px;
            color: #999;
            margin-top: -10px;
        }
            </style>
        </head>
        <body>
            ${printContent.outerHTML}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}