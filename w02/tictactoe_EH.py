"""
Tic-Tac-Toe

W02 Prove: Developer - Solo Code Submission

Created by:
Emanuel Herrera

Last updated by 09/23/2022
"""

#Main, will run until game is over
def main():
    board = new_board()
    player = switch_player("O") #Start with player X
    while not (check_winner(board) or no_more_moves(board)):
        print_board(board)
        spaces = int(input(f"Player {player} choose a space (1-9): "))
        board[spaces - 1] = player
        player = switch_player(player)
    print_board(board)
    print("Thanks for playing!")

# Creates a new board with default start values
def new_board():
    board = []
    for i in range(9):
        board.append(i+1)
    return board

# Prints the board, will print it with the values stored either a number, X or O.
def print_board(board):
    print()    
    print(f"{board[0]}|{board[1]}|{board[2]}")
    print("-+-+-")
    print(f"{board[3]}|{board[4]}|{board[5]}")
    print("-+-+-")   
    print(f"{board[6]}|{board[7]}|{board[8]}")
    print()

# Checks if there is a winner, vertically, horizontally or diagonally
def check_winner(board):
    if (board[0] == board[1] == board[2] or
        board[3] == board[4] == board[5] or
        board[6] == board[7] == board[8] or
        board[0] == board[3] == board[6] or
        board[1] == board[4] == board[7] or
        board[2] == board[5] == board[8] or
        board[0] == board[4] == board[8] or        
        board[2] == board[4] == board[6]):
        print(f"Player wins!")
        return True

# Checks if there are any more moves left
def no_more_moves(board):
    Xs = board.count("X")
    Os = board.count("O")
    moves_left = 9-Xs-Os        
    if moves_left == 0:
        print(f"No more moves left!")
        return True    
    else:
        return False

#Switch between X and O moves
def switch_player(current):
    if current == "O":
        return "X"
    else:
        return "O"

# Runs the main function
if __name__ == "__main__":
    main()