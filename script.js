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

    const id = document.createElement('td');
    id.textContent = document.getElementById('table').rows.length;

    const name = document.createElement('td');
    name.textContent = nameValue;
    name.id = id.textContent + 'name';

    const description = document.createElement('td');
    description.textContent = descriptionValue;
    description.id = id.textContent + 'description';

    const deadline = document.createElement('td');
    deadline.textContent = deadlineValue;
    deadline.id = id.textContent + 'deadline';

    tableRow.appendChild(id);
    tableRow.appendChild(name);
    tableRow.appendChild(description);
    tableRow.appendChild(deadline);
    tableRow.id = id.textContent;

    bodySection.appendChild(tableRow);
}

function changeTask()
{
    const idValue = document.getElementById('id').value;
    const nameValue = document.getElementById('name').value;
    const descriptionValue = document.getElementById('description').value;
    const deadlineValue = document.getElementById('deadline').value;

    if (!idValue)
    {
        alert('Please enter id value');
        return;
    }

    if (nameValue)
    {
        document.getElementById(idValue + 'name').textContent = nameValue;
    }
    
    if (descriptionValue)
    {
        document.getElementById(idValue + 'description').textContent = descriptionValue;
    }

    if (deadlineValue)
    {
        document.getElementById(idValue + 'deadline').textContent = deadlineValue;
    }
}

function removeTask()
{
    const idValue = document.getElementById('id').value;

    if (!idValue)
    {
        alert('Please enter id value');
        return;
    }

    document.getElementById(idValue).remove();
}