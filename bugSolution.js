```javascript
// bugSolution.js
export default async function Page() {
  const data = await fetchData();

  return (
    <ul>
      {data.map(async (item) => {
        // Correctly await the result for each item
        const resolvedItem = await getItemDetails(item.id);
        return (
          <li key={resolvedItem.id}>
            {resolvedItem.name} 
          </li>
        );
      })}
    </ul>
  );
}

async function fetchData() {
  const response = await fetch('/api/data');
  return response.json();
}

async function getItemDetails(itemId) {
  const response = await fetch(`/api/item/${itemId}`);
  return response.json();
}
```