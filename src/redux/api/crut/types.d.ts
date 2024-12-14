namespace FILE {
    type UploadFileResponse = {
      name: string;
      format: string;
      url: string;
    };
  
    type UploadFileRequest = FormData;
    interface ITodo {
        _id?: number;
        img: string;
      }
    
      type GetTodosResponse = ITodo[];
      type GetTodosRequest = void;
    
      type PostTodosResponse = ITodo[];
      type PostTodosRequest = ITodo;

      type DeleteTodosResponse = ITodo[];
      type DeleteTodosRequest = number | undefined;
  }
  