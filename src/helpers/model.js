module.exports = {

  find_or_create: (model, params) => {
    return new Promise( (resolve, reject) => {
      model.findOne(params).then( (document) => {
        if (document) { resolve(document); }
        else {
          model.create(params).then( (new_document) => {
            resolve(new_document);
          });
        }
      });
    });
  }

}
