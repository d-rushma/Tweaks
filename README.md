# DAILY TWEAKS
The "Daily Tweaks" application focuses on providing users with an easy and intuitive way to manage and engage with tweaks—short, insightful pieces of information—across different domains such as technology, education, business, invention, and software.
Users can seamlessly add and delete tweaks, fostering a personalized and dynamic space for sharing and exploring content within their areas of interest. The application offers a user-friendly interface that allows for the easy addition and management of tweaks, giving users control over their contributions and ensuring a customized experience that aligns with their preferences.  
# Technical Skills
![image](https://github.com/user-attachments/assets/57e908eb-c1d4-478f-88df-fc376e283f8f) ![image](https://github.com/user-attachments/assets/876431e9-c601-466d-ad90-2d1677752e20) ![image](https://github.com/user-attachments/assets/26cc1997-2792-476a-9cb7-332dd71183f1) ![image](https://github.com/user-attachments/assets/603bf69a-5391-41c0-ac89-a6e70eddac0f) ![image](https://github.com/user-attachments/assets/5a6c9d5f-13d7-4a2c-872d-570343c21d7f)
# Application
The purpose of "Daily Tweaks" is to create an accessible platform where users can actively participate in curating and managing valuable snippets of information within their chosen interest areas. By promoting engagement and collaboration, the application aims to build a vibrant community centred around the exchange of knowledge and ideas.  
<img width="381" alt="{B3790C5C-C9F0-409C-9BBE-F557982FC1DD}" src="https://github.com/user-attachments/assets/2a4a811e-8f78-4f6f-8e67-5b22a4dda151" align="center"/>   
# WORKFLOW
<img width="528" alt="{925D87DD-5C02-4A6E-9627-8A8D3A72C275}" src="https://github.com/user-attachments/assets/9c549faa-55c4-4f4e-932b-7a3167c1c1c4" />  

- User information, such as the username, is stored in the local storage of the browser
- The system is deployed using ```npm run build```
- Once built, the website is deployed, which serves as the main interface for the system
- After deployment, the website offers functionalities such as viewing the "tweak board" using a ```GET``` request.
- Add Tweak:
  - A user can add a tweak through the "Add Tweak" functionality.
  - This sends a ```POST``` request to the backend API (using Express) to create a tweak.
  - The tweak is added to the cloud using Atlas (MongoDB cloud service).
  - Through Compass (MongoDB GUI), the tweak is eventually added to the database.
- Delete Tweak:
  - Alternatively, a user can delete an existing tweak through the "Delete Tweak" functionality.
  - This sends a ```DELETE``` request to the backend API (using Express).
  - The tweak is deleted from the cloud (via Atlas).
  - Using Compass, the tweak is removed from the database.
# INTERFACE 
<img width="556" alt="{0A101CAB-25E5-4E7A-85A6-DC924B361D98}" src="https://github.com/user-attachments/assets/e868703f-030b-4a63-99ad-f0fb16131194" />

