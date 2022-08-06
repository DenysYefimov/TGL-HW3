function addTask()
{
    const nameValue = document.getElementById('name').value;
    const descriptionValue = document.getElementById('description').value;
    const deadlineValue = document.getElementById('deadline').value;

    if (!nameValue)
    {
        alert('Please enter name value');
        return;
    }
    
    if (!descriptionValue)
    {
        alert('Please enter description value');
        return;
    }

    if (!deadlineValue)
    {
        alert('Please enter deadline value');
        return;
    }  

    const bodySection = document.getElementById('tableBodyElement');
    const tableRow = document.createElement('tr');
    tableRow.contentEditable = true;

    const id = document.createElement('td');
    id.textContent = bodySection.rows.length + 1;
    id.id = id.textContent + 'id';

    localStorage.setItem(id.textContent, JSON.stringify([nameValue, descriptionValue, deadlineValue]));

    const name = document.createElement('td');
    name.textContent = nameValue;
    name.id = id.textContent + 'name';

    const description = document.createElement('td');
    description.textContent = descriptionValue;
    description.id = id.textContent + 'description';

    const deadline = document.createElement('td');
    deadline.textContent = deadlineValue;
    deadline.id = id.textContent + 'deadline';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.id = id.textContent + 'delete';
    deleteBtn.onclick = () => 
    {
        document.getElementById(id.textContent).remove();
        localStorage.removeItem(id.textContent);
    };

    tableRow.appendChild(id);
    tableRow.appendChild(name);
    tableRow.appendChild(description);
    tableRow.appendChild(deadline);
    tableRow.appendChild(deleteBtn);
    tableRow.id = id.textContent;

    bodySection.appendChild(tableRow);
}

function sort(column, flag)
{
    const bodySection = document.getElementById('tableBodyElement');
    let rowsArray = Array.from(bodySection.rows);
    if(flag)
    {
        rowsArray.sort((a, b) => a.cells[column].textContent > b.cells[column].textContent ? 1 : -1);
    }
    else
    {
        rowsArray.sort((a, b) => a.cells[column].textContent < b.cells[column].textContent ? 1 : -1);
    }    

    bodySection.append(...rowsArray);
    return !flag;
}