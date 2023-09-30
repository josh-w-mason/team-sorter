import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "json/playerData.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  } else if (req.method === "POST") {
    // Code for POST requests goes here

    try {
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      // Get the data from the request body
      const { id, name, benched, present } = req.body;

      // Add the new data to the object
      const newData = {
        id,
        name,
        benched,
        present,
      };
      objectData.push(newData);

      // Convert the object back to a JSON string
      const updatedData = JSON.stringify(objectData);

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, updatedData);

      // Send a success response
      res.status(200).json({ message: "Data stored successfully" });
    } catch (error) {
      console.error(error);
      // Send an error response
      res.status(500).json({ message: "Error storing data" });
    }
  }
}
