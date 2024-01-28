// đăng nhập tk
const users = [
    {
      username: 'user1',
      password: 'password1',
    },
    {
      username: 'user2',
      password: 'password2',
    },
    // thêm người dùng khác 
  ];
  
  function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      console.log('Đăng nhập thành công!');
    } else {
      console.log('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
  }
//giao dịch

const user = {
    name: 'Người dùng',
    balance: 0,
    transactions: [],
  };
  
  function addTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      date: new Date(),
    };
    user.transactions.push(transaction);
    if (type === 'deposit') {
      user.balance += amount;
    } else if (type === 'withdraw') {
      user.balance -= amount;
    }
  }
  //lịch sử giao dịch
  function displayTransactions() {
    user.transactions.forEach((transaction, index) => {
      console.log(`Giao dịch ${index + 1}: ${transaction.type} ${transaction.amount} vào ${transaction.date}`);
    });
  }
  //chuyển tiền
  function transferMoney(amount, recipient) {
    if (user.balance < amount) {
      console.log('Số dư không đủ.');
    } else {
      addTransaction(-amount, 'transfer');
      recipient.transactions.push({
        amount,
        type: 'received',
        date: new Date(),
      });
      recipient.balance += amount;
    }
  }