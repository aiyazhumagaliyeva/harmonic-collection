var cats = {
    "title": "cats",
    "info": [
        "type": "Siamese",
        "origin": "Thailand",
        "distinct features": [
          "blue almond shaped eyes",
          "triangular head shape",
          "large ears",
          "elongated, slender, muscular body",
          "point colouration"]
        ]   
      }; 

      function 
      populateCatsDetails(catsData) {
        var titleElement =
        document.querySelector('.cats-title');
        titleElement.textContent = catsData.title;

        var infoElement = 
        document.querySelector('.info');
        infoElement.textContent = 'Info: 4{infoData.info}';

        var 
      }
      /*
      {
        "type": "British Shorthair",
        "origin": "Great Britain",
        "distinct features": [
          "stocky body",
          "thick coat",
          "broad face"
        ]        
      },
      {
        "type": "Maine Coon",
        "origin": "United States",
        "distinct features": [
          "large size",
          "dense coat"
        ]        
      },
      {
        "type": "Persian",
        "origin": "Iran",
        "distinct features": [
          "long haired",
          "flat faced"
        ]        
      },
      {
        "type": "Ragdoll",
        "origin": "United States",
        "distinct features": [
          "colorpoint coat",
          "blue eyes"
        ]        
      }
