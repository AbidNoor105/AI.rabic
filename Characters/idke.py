def solution(A):
	numbers = A.sort()
	smallestNumber = 1
	
	for i in A:
		if i == smallestNumber:
			smallestNumber += 1

	print(smallestNumber)

solution([3,2,1,6])