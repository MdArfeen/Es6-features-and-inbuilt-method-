const user = { 
    id: 123, 
    profile: { 
      name: "John Doe", 
      address: { 
        city: "Los Angeles", 
        zipcode: "90001" 
      } 
    } 
  };
  
  // Extract data using optional chaining
  const id = user?.id;
  const name = user?.profile?.name;
  const city = user?.profile?.address?.city;
  const zipcode = user?.profile?.address?.zipcode;
  
  let result = `User ${name || "Information not available"} (ID: ${id || "Information not available"})`;
  if (city || zipcode) {
    result += ` lives in ${city || "Information not available"} (ZIP: ${zipcode || "Information not available"})`;
  }
  
  console.log(result);
  