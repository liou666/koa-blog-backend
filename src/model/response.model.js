// eslint-disable-next-line max-classes-per-file
class BaseModel {
  constructor(data, msg) {
    if (typeof data === 'string') {
      this.msg = data
      return
    }
    if (data) {
      this.data = data
    }

    if (msg) {
      this.msg = msg
    }
  }
}

class ErrorModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = -1
  }
}

class SucceedModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = 0
  }
}

module.exports = {
  ErrorModel,
  SucceedModel,
}
