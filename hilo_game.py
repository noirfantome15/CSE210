"""
Tic-Tac-Toe

W04 Prove: Developer - Team Code Submission

Created by:
Emanuel Herrera

Last updated by 10/07/2022
"""

#Main, will run until game is over
def main():

    score = score.calculate("Yes")     

#tracks the score of the game
class score:
    def __init__(self, score):
        self.score = score

    @classmethod
    def calculate(cls, guessed):
        if guessed == "Yes":
            score = score + 100
        else:
            score = score - 70
        print(f"Your score is: {score}")
    


# Runs the main function
if __name__ == "__main__":
    main()