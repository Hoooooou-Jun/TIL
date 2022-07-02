# GIT 명령어 정리

<br>

### 기존 연결된 원격저장소 연결 해지

```
git remote remove origin
```

### 새 Repository 주소 추가

```
git remote add origin
```

### LOCAL <-> HUB 원격 연결

```
git remote -v
```

### .git 파일 생성

```
git init
```

### 선택한 프로젝트 폴더 내 모든 파일 버전 관리

```
git add .
```

### 버전 관리 Tracking

```
git status
```

### Commit

```
git commit -m "주석"
```

### push

```
git push -u origin master
git push -f origin
git push --set-upstream origin main
```

### 이미 Commited된 파일을 ignore할 때

```
git rm -r --cached . // cache에 기록된 tracking 중인 파일리스트 삭제
git add .
git commit -m 'remove ignored file'
git push {remote} {branch}
```

### repository 동기화

```
git remote add upstream https://github.com/owner/original_repo.git
```

### 원본 저장소의 최신 내용 받아오기

```
git fetch upstream
```

### 받아온 내역을 로컬 저장소로 병합
```
git mergy upstram/master
```
이거 다음엔 푸쉬해주기.
